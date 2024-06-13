import React, { act } from "react";
import ReactDOM from "react-dom/client"
import { Appointment } from "../src/Appointment";

describe("Appointment",()=>{
    it.skip("renders the customer first name", () => {
        const customer = { firstName: "Ashley" };
        const component = (
            <Appointment customer={customer} />
        );

        const container = document.createElement("div");
        document.body.appendChild(container);
s
        act(() =>
            ReactDOM.createRoot(container).render(component)
        )
        expect(document.body.textContent).toContain(
            "Ashley"
        );
    });
    it("renders the customer first name", () => {
        const customer = { firstName: "Jordan" };
        const component = (
            <Appointment customer={customer} />
        );
        const container = document.createElement("div");
        document.body.replaceChildren(container);

        act(() =>
            ReactDOM.createRoot(container).render(component)
        )
        expect(document.body.textContent).toContain(
            "Jordan"
        );
    });
});