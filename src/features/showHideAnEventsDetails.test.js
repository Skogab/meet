import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import React from "react";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
	let AppWrapper;

	// Scenario 1

	test("An event element is collapsed by default", ({ given, when, then }) => {
		given("that a user has not selected a city", () => {});

		when("the user opens the app and performs no action", async () => {
			AppWrapper = await mount(<App />);
		});

		then("all events details should be hidden.", () => {
			AppWrapper.update();
			expect(AppWrapper.find(".event .expanded")).toHaveLength(0);
		});
	});

	// Scenario 2

	test("User can expand an event to see its details", ({ given, when, then }) => {
		given("that a user has selected an event", async () => {
			AppWrapper = await mount(<App />);
		});

		when("the user clicks on the event show details button", () => {
			AppWrapper.update();
			AppWrapper.find(".Event .details-btn").at(0).simulate("click");
		});

		then("the event details should be displayed.", () => {
			expect(AppWrapper.find(".Event .details")).toHaveLength(1);
		});
	});

	// Scenario 3

	test("User can collapse an event to hide its details", ({ given, when, then }) => {
		given("that a user has finished viewing a selected event", async () => {
			AppWrapper = await mount(<App />);
			AppWrapper.update();
			AppWrapper.find(".Event .details-btn").at(0).simulate("click");
		});

		when("the user clicks on the details button again", () => {
			AppWrapper.update();
			AppWrapper.find(".Event .details-btn").at(0).simulate("click");
		});

		then("the event details should be hidden.", () => {
			expect(AppWrapper.find(".Event .event-details")).toHaveLength(0);
		});
	});
});
