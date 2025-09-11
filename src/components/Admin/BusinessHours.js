"use client";
import Image from "next/image";

function BusinessHours() {
  return (
    <div className="container">
      <h3 style={{ fontWeight: "600", margin: "auto", display: "table" }}>
        Configuring Business Hours
      </h3>
      <p>
        Setting up business hours in your SUPPORTSPOC system ensures that your
        support team is available to handle customer queries during designated
        times. This helps in managing customer expectations and improving overall
        service efficiency.
      </p>

      <h3 style={{ fontWeight: "600", fontSize: "22px", marginTop: "20px" }}>
        Steps to Configure Business Hours
      </h3>
      <ol>
        <li>
          Log in to your{" "}
          <a href="https://app.supportspoc.com">SUPPORTSPOC</a> account. Click
          on the Admin menu and select <b>Business Hours</b>.
        </li>

        <li>
          Click on{" "}
          <button type="button" className="ss-button">
            + New Business Hours
          </button>{" "}
          (top right side of the page).
          <br />
          A page similar to the screenshot below will open:
          <div style={{ marginTop: "10px" }}>
            <Image
              src="/business-hours.png" // must be placed in /public
              alt="Business Hours Configuration Screenshot"
              width={800}
              height={400}
            />
          </div>
        </li>

        <li>Enter the name of the calendar.</li>

        <li>
          If your business support hours are 24×7, select the{" "}
          <b>24x7 Business</b> option. All day-specific input fields will be
          disabled.
        </li>

        <li>
          <strong>Define Business Hours:</strong>
          <br />
          Specify start and end times for each day of the week. You can set
          different hours for each day or apply the same hours to multiple days.
          <ul>
            <li>
              <strong>Monday to Friday:</strong> e.g., 9:00 AM – 6:00 PM
            </li>
            <li>
              <strong>Saturday:</strong> e.g., 10:00 AM – 2:00 PM
            </li>
            <li>
              <strong>Sunday:</strong> Leave blank or set to “Closed”.
            </li>
          </ul>
        </li>

        <li>Configure break timings.</li>
        <li>Select the timezone for the business hours.</li>
        <li>Add holidays (optional).</li>

        <li>
          <strong>Save Configuration:</strong>
          <br />
          Once you have defined the business hours, click on <b>Save</b> to
          apply the settings.
        </li>
      </ol>

      <div className="note">
        <p>
          <strong>Note:</strong> Holidays and break timings are considered when
          calculating ticket SLAs and processing incoming calls.
        </p>
      </div>
    </div>
  );
}

export default BusinessHours;
