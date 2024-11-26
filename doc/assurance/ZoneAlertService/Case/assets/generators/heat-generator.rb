# encoding: UTF-8

require 'nokogiri'

module HEAT_GENERATOR

module_function

HTML = <<STOP
  <section id="content">
    <p>
      This generated document demonstrates how metadata can be accessed by the
      build system and transformed into reports for inclusion in a safety case.
    </p>

    <table>
      <thead>
        <tr>
          <th>GSN ID</th>
          <th>Element</th>
          <th>Heat</th>
          <th>Argument</th>
        </tr>
      </thead>
      <tbody>
%{table_rows}      
      </tbody>
    </table>
  </section>
STOP

ROW = <<STOP
        <tr>
          <td>
            <a href="argument-index.html#gsnid-%{gsn_id}">
              %{gsn_id}
            </a>
          </td>
          <td>
            <a href="../arguments/%{arg_id}.html#?present=%{css_id}">
              %{element_html}
            </a>
          </td>
          <td>
            %{heat}
          </td>
          <td>
            <a href="../arguments/%{arg_id}.html">
              %{arg_name}
            </a>
          </td>
        </tr>
STOP

def generate(_, _)
  HTML % {
    table_rows: SCT::GSN.joins(:argument).where(arguments: {linked: true, 
                                           generate_ids: true}).
    find_all do |gsn| 
      gsn.heat 
    end.collect do |gsn|
      ROW % {
        gsn_id:       gsn.gsn_id,
        arg_id:       gsn.argument.css_id,
        css_id:       gsn.css_id,
        element_html: gsn.to_html,
        arg_name:     gsn.argument.title,
        heat:         gsn.heat
      }
    end.join
  }
end

end # module heat_generator