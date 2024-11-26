<script>
  // Get a jQuery object for the row indicated by the given ID. All of the
  // knowledge of row addressing is encapsulated here.
  function fetchRow(id) {
    return $('#gsnid-' + id);
  } // fetchRow

  // Parse the given row (a jQuery) into an object with id, text, parent, type,
  // ownership, child_ids, and context_ids fields. All of the knowledge of where
  // the data is and how it can be accessed is encapsulated here.
  function parseRow(row) {
    var obj = {};
    
    obj.id   = $('.gsn-id',  row)[0].innerHTML.trim();
    obj.text = $('.element', row)[0].innerHTML.trim();
    obj.parent = $('.parent', row)[0].innerHTML.trim();
    obj.type   = $('.type', row)[0].innerHTML.trim();
    
    obj.child_ids    = $('.children li', row);
    obj.context_ids  = $('.contexts li', row);
    
    return obj;
  } // parseRow
  
  // Build rows for the jQuery of child_ids (<li>###</li>) and load them
  // into the pop-up with the given label.
  function buildChildrenRows(row, popup, label, clickable) {
    row.child_ids.each(function(index, child_id) {
      // Fetch and parse the row for this child.
      var child = parseRow(fetchRow(child_id.innerHTML.trim()));
    
      var rowHTML = '<tr class="muted added';
      
      if (clickable) {
        rowHTML += ' popup-clickable';
      }
      
      rowHTML += '">';
    
      // If this is the first child, we have to put in the label and set the
      // rowspan for the label cell.
      if (index == 0) {
        rowHTML += '<td rowspan="' + row.child_ids.length + '">'
                +    label
                +  '</td>';
      }
      
      rowHTML += '<td class="element">'
              +    child.text
              +  '</td>'
              +  '<td class="border-right gsn-id">'
              +    child.id
              +  '</td>'
              +'</tr>';
              
      $('#pop-up-body', popup).append(rowHTML);
    });
  } // buildChildrenRows
  
  // Build rows for the contexts
  function buildContextRows(row, context_table, recursed) {
    row.context_ids.each(function(index, context_id) {
      // Fetch and parse the row for this context
      var context = parseRow(fetchRow(context_id.innerHTML.trim()));
      
      var rowHTML = '<tr>'
                  +   '<td>'
                  +     context.text
                  +   '</td>'
                  +   '<td class="gsn-id">'
                  +     context.id
                  +   '</td>'
                  + '</tr>';
  
      context_table.append(rowHTML);
    });
    
    // The first time through (not recursing) we want to slip in a new thead so
    // that we can hide the inherited context unless the user requests it.
    if (!recursed) {
      $('#context-table').append(
        '</tbody>' +
//        '<tbody class="fake-thead">' +
//          '<td colspan="2"><span class="verb">Show</span> Inherited Context</td>' +
//        '</tbody>' +
        '<thead>' +
          '<th colspan="2" class="handle"><span class="verb">Show</span> Inherited Context</th>' +
        '</thead>' +
        '<tbody class="inherited">'
      );
    }
    
    $('.handle').click(function() {
      $('.inherited').toggle();
      
      if ($('.verb')[0].innerHTML == 'Show') {
        $('.inherited').show();
        $('.verb')[0].innerHTML = 'Hide';
      } else {
        $('.inherited').hide();
        $('.verb')[0].innerHTML = 'Show';
      }
    });
    
    context_table = $('.inherited');
    
    // Recursively build context rows for our parent.
    if (row.parent) {
      var parent = parseRow(fetchRow(row.parent));
    
      buildContextRows(parent, context_table, true);
    }
  } // buildContextRows
  
  function prePop(row, popup) {
    // The row this time is not a full row from the original table, but an
    // abbreviated row that we built when we made the popup. So we need to 
    // fetch the corresponding full row before we can call build pop up.
    //
    // We also need to make sure that this is a claim that was clicked on....
    var idQ = $('.gsn-id a', row);
    var id = idQ[0].innerHTML.trim();
    var clicked_row = fetchRow(id);
    var clicked     = parseRow(clicked_row);
    
    if (clicked.type == 'Goal') {
      $('.added', popup).detach();
      $('.popup-clickable .element').unbind('click');
      $('.handle').unbind('click');
      buildPopUp(clicked_row, popup);
    }
  }
  
  
  // Populate the pop-up based on the row given. Then show the popup.
  function buildPopUp(row, popup) {
    // Parse the row to get the "local" claim.
    var local_claim     = parseRow(row);
    var parent_strategy = {};
    var parent_claim    = {};
    
    if (local_claim.parent != '') {
      parent_strategy = parseRow(fetchRow(local_claim.parent));
      parent_claim    = parseRow(fetchRow(parent_strategy.parent));
    } else {
      parent_strategy.text = '[Top-level Claim]';
      parent_strategy.id   = '';
      
      parent_claim.text = '[Top-level Claim]';
      parent_claim.id   = '';
    }
    
    // Fill in the popup.
    $('#parent-claim',    popup)[0].innerHTML = parent_claim.text;
    $('#parent-claim-id', popup)[0].innerHTML = parent_claim.id;
    
    $('#parent-strategy',    popup)[0].innerHTML = parent_strategy.text;
    $('#parent-strategy-id', popup)[0].innerHTML = parent_strategy.id;
    
    $('#claim',    popup)[0].innerHTML = local_claim.text;
    $('#claim-id', popup)[0].innerHTML = local_claim.id;
    
    // We need to record the total number of rows that we have on the left so
    // that the right "column" (which is a cell at the end of the first row)
    // can be told to span all of them. We start out with 3 rows on the left, as
    // set above.
    var left_rows = 3;
    
    // Are there any children with which to bother?
    if (local_claim.child_ids[0]) {
      var first_child = parseRow(fetchRow(
                                    local_claim.child_ids[0].innerHTML.trim()));

      // Process children according to the type of the first child. We are
      // making two assumptions here. First, that there is only ever one
      // strategy for a claim. Second, that we don't have both a strategy and
      // evidence for a claim. Neither of these are completely satisfactory, but
      // we will make them for now. 
      switch (first_child.type) {
        case 'Strategy': {
          var child_strategy = first_child;
          
          // Create the row for the child strategy
          $('#pop-up-body', popup).append(
            '<tr class="muted added">' +
              '<td>Child Strategy</td>' +
              '<td class="element">' +
                child_strategy.text +
              '</td>' +
              '<td class="gsn-id border-right">' +
                child_strategy.id +
              '</td>' +
            '</tr>'
          );
          
          buildChildrenRows(child_strategy, popup,
            'Child Claim' + (child_strategy.child_ids.length > 1 ? 's' : ''), 
            true);

          left_rows += child_strategy.child_ids.length + 1;
          break;          
        }
        
        case 'Module': {
          buildChildrenRows(local_claim, popup, 'Module');
          left_rows += local_claim.child_ids.length;
          break;
        }

        case 'Contract': {
          buildChildrenRows(local_claim, popup, 'Contract');
          left_rows += local_claim.child_ids.length;
          break;
        }
        
        case 'Evidence': {
          buildChildrenRows(local_claim, popup, 'Evidence');
          left_rows += local_claim.child_ids.length;
          break;
        }
      }
    } // if children
    
    // Structure for the context table. Note that doing making the Expand a 
    // th is completely wrong structurally, but is the only reasonable way to
    // get the text right-aligned and also keep the baseline vertical alignment
    // (without resorting to CSS3 that is unsupported on older IEs).
    $('#right-column', popup).append(
      '<table id="context-table" class="added">' +
        '<thead>' +
        '</thead>' +
        '<tbody>' +
        '</tbody>' + 
      '</table>'
    );
    
//     $('th.handle').click(function() {
//       $('#context-table tbody').toggle();
//     });
//     
    // Always slip in a last <tr> so that the final td.element's highlight isn't
    // silly tall.
    $('#pop-up-body', popup).append(
      '<tr class="muted added">' +
        '<td></td>' +
        '<td></td>' +
        '<td class="border-right"></td>' +
      '</tr>'
    );
    left_rows += 1;
    
    // Now, build the comprehensive list of context in scope for this
    // element. 
    buildContextRows(local_claim, $('#context-table tbody', popup));
  
    // We have to change the rowspan for the right column
    $('#right-column', popup).attr('rowspan', left_rows);
    
    $('.inherited').hide();
    popup.show();

    // Attach click handlers to the popup-clickable elements.
    $('.popup-clickable .element').click(function() {
      prePop(this.parentElement, popup);
    });
  } // buildPopUp
  
  // Initialize pop-up support. Should be called from body onload
  function setup() {
    var popup = $('#pop-up');
  
    popup.hide();
    
    popup.click(function(evt) {
      if (evt.target.id == 'pop-up') {
        popup.hide();
        $('.popup-clickable .element').unbind('click');
        $('.added', popup).detach();
      }      
    });
    
    $('.clickable .element').click(function() {
      buildPopUp(this.parentElement, popup);
    });
  } // Setup
</script>