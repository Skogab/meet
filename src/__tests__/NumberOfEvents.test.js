// Feature 3: Specify number of events User story:
// As a user, i want to specify, how many events shall be shown while a take a look, because too much information can stress me out.
// Scenario 1: When user hasn’t specified a number, 32 is the default number
// ● Given The user is in the app and can make a choice, how many events to be shown
// ● When The user starts search without entry
// ● Then Max. 32 events will be shown Scenario 2: User can change the number of events they want to see
// ● Given The User can enter a number of events he wants to be shown ● When User enters a number and confirms
// ● Then The number of events, the user asked for, will be shown

import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateNumberOfEvents={() => {}} />
    );
  });

  // test 1: checks if the basic component is rendered
  test("renders the component", () => {
    expect(NumberOfEventsWrapper).toBeDefined();
  });

  // test 2: the default number of events shown is 32
  test("user sees 32 events by default", () => {
    expect(NumberOfEventsWrapper.state("number")).toBe(32);
  });

  // test 3: the input function is rendered correctly
  test("renders input correctly", () => {
    const number = NumberOfEventsWrapper.state("number");
    expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(number);
  });

  // test 4: the component state changes when user inputs value (10)
  test("change state when user input changes", () => {
    NumberOfEventsWrapper.setState({
      number: "32",
    });
    const eventNumber = { target: { value: "10" } };
    NumberOfEventsWrapper.find(".number").simulate("change", eventNumber);
    expect(NumberOfEventsWrapper.state("number")).toBe("10");
  });

  // test 5: the results of the user input is rendered correctly
  test("rendered number of events is equal to the users input", () => {
    const RenderedNumberOfEvents = shallow(
      <NumberOfEvents number={10} updateNumberOfEvents={() => {}} />
    );
    expect(RenderedNumberOfEvents.state("number")).toBe(10);
  });
});
