import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  const event = mockData[0];

  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  describe("Rendering", () => {
    // Test 1: Renders the Event component
    test("renders the Event component", () => {
      expect(EventWrapper).toBeDefined();
    });

    // Test 2: Renders the summary correctly in an h2 tag
    test("renders the summary correctly in an h2 tag", () => {
      const summary = EventWrapper.find("h2.summary");
      expect(summary).toHaveLength(1);
      expect(summary.text()).toBe(event.summary);
    });

    // Test 3: Checks that the start time of the event is rendered
    test("renders the event start time correctly", () => {
      const eventStart = EventWrapper.find("p.event-start");
      expect(eventStart).toHaveLength(1);
      expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
    });

    // Test 4: Checks that the location is rendered
    test("renders the event location correctly", () => {
      const eventLocation = EventWrapper.find("p.event-location");
      expect(eventLocation).toHaveLength(1);
      expect(eventLocation.text()).toBe(
        `@${event.summary} | ${event.location}`
      );
    });
  });

  describe("Collapsed view", () => {
    // Test 5: Checks that the button is collapsed by default
    test("renders collapsed by default", () => {
      expect(EventWrapper.state("collapsed")).toBe(true);
    });

    // Test 6: Checks that the collapsed view is rendered correctly
    test("renders the collapsed view correctly", () => {
      expect(EventWrapper.find("h3.about")).toHaveLength(0);
      expect(EventWrapper.find("a.link")).toHaveLength(0);
      expect(EventWrapper.find("p.description")).toHaveLength(0);
    });
  });

  describe("Expanded view", () => {
    // Test 7: Checks that the user can view event details when clicking the button
    test("allows the user to expand the event details when clicking the button", () => {
      const detailsButton = EventWrapper.find("button.details-btn");
      expect(detailsButton.text()).toBe("show details");
      detailsButton.simulate("click");
      expect(EventWrapper.state("collapsed")).toBe(false);
    });

    // Test 8: Checks that the expanded view is rendered correctly
    test("renders the expanded view correctly", () => {
      expect(EventWrapper.find("h3.about")).toHaveLength(1);
      expect(EventWrapper.find("a.link")).toHaveLength(1);
      expect(EventWrapper.find("p.description")).toHaveLength(1);
    });

    // test 9: renders expanded view
    test("event details is expanded and rendered correctly", () => {
      expect(EventWrapper.find("h3.about")).toHaveLength(1);
      expect(EventWrapper.find("a.link")).toHaveLength(1);
      expect(EventWrapper.find("p.description")).toHaveLength(1);
    });

    // test 10: user can collapse an event when clicking on details button
    test("user can collapse an event when clicking hide details button", () => {
      const detailsButton = EventWrapper.find("button.details-btn");
      expect(detailsButton.text()).toBe("hide details");
      detailsButton.simulate("click");
      expect(EventWrapper.state("collapsed")).toBe(true);
    });
  });
});
