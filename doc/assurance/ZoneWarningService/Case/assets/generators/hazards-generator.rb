# encoding: UTF-8

require 'nokogiri'

module HAZARDS_GENERATOR

module_function

HTML = <<STOP
  <section id="content">
    <p>
      Filter Hazards:&nbsp;&nbsp;
      <input id="search" type="search" style="width:75%%;" />
    </p>

    <table>
      %s    </table>

    <!-- Filtering Code; relies on jQuery -->
    <script type="text/javascript">
      $('#search').bind('keyup', updateQuery);
      $('#search').bind('click', updateQuery);

      function updateQuery() {
        var searchText = $('#search').val();

        if (searchText == '') {
          $('div.definition').show();
        } else {
          var tds = $('div.definition > div.term');
          $('div.definition').hide();
          tds.each(function(index, td) {
            if (td.innerHTML.match(
                            new RegExp('\\b(' + searchText + '\\w*)', 'i')))
            {
              $(td.parentNode).show();
            }
          });
        }
      }
    </script>
  </section>
STOP

HAZARD = <<STOP
      <tr id="%s" class="hazard-info">
        <td class="hazard-id">%s</td>
        <td class="hazard-description">%s
          <table>
            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel hazard-grey">
                Hazard Indication:
              </td>
              <td class="hazard-indication hazard-grey">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel">Effect of Hazard:</td>
              <td class="hazard-effect">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel hazard-grey">
                Affected Subsystem:
              </td>
              <td class="hazard-subsystem hazard-grey">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel">Failure Modes:</td>
              <td class="hazard-modes">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel hazard-grey">
                Operational State:
              </td>
              <td class="hazard-state hazard-grey">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel">Hazard Severity:</td>
              <td class="hazard-severity">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel hazard-grey">
                Likelihood:
              </td>
              <td class="hazard-likelihood hazard-grey">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel">Assessment:</td>
              <td class="hazard-assessment">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel hazard-grey">
                Action:
              </td>
              <td class="hazard-actions hazard-grey">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel">Recommendations:</td>
              <td class="hazard-recommendations">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel hazard-grey">
                Mitigation:
              </td>
              <td class="hazard-mitigations hazard-grey">%s</td>
            </tr>

            <tr class="hazard-subinfo">
              <td></td>
              <td class="hazard-sublabel">Remarks:</td>
              <td class="hazard-remarks">%s</td>
            </tr>
          </table>
        </td>
        <td class="hazard-links">%s</td>
      </tr>
STOP

def listify_css(hazard, section)
  '<ul>' +
    hazard.css(section).collect do |element|
      if element.inner_text.strip
        '<li>' + element.inner_text.strip + '</li>'
      else
        ''
      end
    end.join('') +
  '</ul>'
end

def generate(config, map)
  # Read the acronyms from the acronym database
  xml = Nokogiri::XML(File.read('assets/databases/hazards.xml'))

  # Fill the html with the definitions
  html = HTML % xml.css('hazard').collect do |hazard|
    HAZARD % [
      # Target
      hazard.css('target').inner_text.strip,

      # ID
      hazard['id'].to_s.strip,

      # Descr
      hazard.css('description').inner_text.strip,

      # Indication
      hazard.css('indication').inner_text.strip,

      # Effect
      hazard.css('effect').inner_text.strip,

      # Subsystem
      hazard.css('subsystem').inner_text.strip,

      # Modes
      listify_css(hazard, 'mode'),

      # State
      hazard.css('state').inner_text.strip,

      # Severity
      hazard.css('severity').inner_text.strip,

      # Likelihood
      hazard.css('likelihood').inner_text.strip,

      # Assessment
      hazard.css('assessment').inner_text.strip,

      # Actions
      listify_css(hazard, 'action'),

      # Recommendations
      listify_css(hazard, 'recommendation'),

      # Mitigations
      listify_css(hazard, 'mitigation'),

      # Remarks
      listify_css(hazard, 'remark'),

      # Links
      listify_css(hazard, 'link'),
    ]
  end.join
end

end # module hazards_generator