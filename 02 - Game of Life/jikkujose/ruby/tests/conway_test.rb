require_relative "./test_helper"
require_relative "../lib/conway.rb"

class ConwayTest < Minitest::Test
  [
    { input: [[false]],
      output: [[false]],
      name: "1x1" },
    { input: [[true]],
      output: [[false]],
      name: "1x1_alive" },
    { input: [[false, false]],
      output: [[false, false]],
      name: "1x2" },
    { input: [[false, true]],
      output: [[false, false]],
      name: "1x2_one_alive" },
    { input: [[true, true]],
      output: [[false, false]],
      name: "1x2_both_alive" },
    { input: [[false, false], [false, false]],
      output: [[false, false], [false, false]],
      name: "2x2" },
    { input: [[true, true], [true, true]],
      output: [[true, true], [true, true]],
      name: "2x2" },
    { input: [[true, false], [true, true]],
      output: [[true, true], [true, true]],
      name: "2x2_three_alive" },
    { input: [[false, false], [true, true]],
      output: [[false, false], [false, false]],
      name: "2x2_two_alive" },
    { input: [[false, false, false], [true, true, true], [false, false, false]],

      output: [[false, true, false], [false, true, false], [false, true, false]],
      name: "3x3_h" },
    { input: [[false, true, false], [false, true, false], [false, true, false]],
      output: [[false, false, false], [true, true, true], [false, false, false]],
      name: "3x3_h" },
    { input: [[true, true, true], [true, true, true], [true, true, true]],
      output: [[true, false, true], [false, false, false], [true, false, true]],
      name: "3x3_all_alive" },
  ].each do |input:,
             output:, name:|
    define_method("test_#{name}") do
      assert_equal(
        output, CellularAutomata::Conway::next_state(input)
      )
    end
  end
end
