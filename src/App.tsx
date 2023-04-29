import { useState } from "react";
import {
  Button,
  Checkbox,
  Chip,
  DatePicker,
  Select,
  Switch,
  TextField,
  TimePicker,
  Spinner,
  Drawer,
  Modal,
  Accordion,
  Sidebar,
  Card,
  Tabs
} from "./components";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";

function App() {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const totalItems = Array.from(Array(80).keys());

  return (
    <>
      <div className="bg-slate-200 p-0 h-screen overflow-hidden">
        <div className="flex h-full">
          <Sidebar />

          {/* Main Content */}
          <div className="flex gap-4 bg-slate-300 p-4 m-4 items-start flex-wrap w-full rounded-lg">
            <form
              className="flex flex-col gap-4"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const data = new FormData(event.target as HTMLFormElement);
                // console.log(event.target, data)
                const parsed = Object.fromEntries(data);
                console.log(parsed);
              }}
            >
              <TextField name="name" error />
              <TextField name="aasim" />
              <Select
                name="asasa"
                options={[
                  {
                    label: "aaa",
                    value: "aaa",
                  },
                  {
                    label: "aaa",
                    value: "yu",
                  },
                  {
                    label: "aaa",
                    value: "rtr",
                  },
                  {
                    label: "aaa",
                    value: "tr",
                  },
                  {
                    label: "aaa",
                    value: "ee",
                  },
                  {
                    label: "aaa",
                    value: "ff",
                  },
                  {
                    label: "aaa",
                    value: "ew",
                  },
                  {
                    label: "aaa",
                    value: "df",
                  },
                  {
                    label: "aaa",
                    value: "fdd",
                  },
                  {
                    label: "aaa",
                    value: "aaa",
                  },
                  {
                    label: "aaa",
                    value: "yu",
                  },
                  {
                    label: "aaa",
                    value: "rtr",
                  },
                  {
                    label: "aaa",
                    value: "tr",
                  },
                  {
                    label: "aaa",
                    value: "ee",
                  },
                ]}
              />
              <Switch name="select" />
              <Checkbox size="md" name="test" />
              <DatePicker
                name="current_date"
                onDateChange={(date) => setSelectedDate(date)}
                value={selectedDate}
                dateFormat="DD MMM YYYY"
              />
              <TimePicker
                name="hjhjh"
                // value={selectedDate}
                timeFormat="hh:mm A"
                // is24Hours
                // onTimeChange={(time)=>setSelectedDate(time)}
              />
              <Chip title="Hello World" isClickable />
              <Spinner />
              <Button type="submit" variant="contained" isLoading>
                Submit
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
                variant="danger"
              >
                Open Drawer
              </Button>
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                title={"Hello Muhammed"}
                verticalAlign="center"
                size="sm"
                footer={"Good luck"}
              >
                {totalItems.map((i) => (
                  <p key={i}>Hello Muhammed {i}</p>
                ))}
              </Modal>
            </form>
            <div>
              <Tabs/>
              {/* <Accordion title="Accordion Title">
                <p>
                  Accordion Contenhghghghghghghg Accordion Content Accordion
                  Content
                </p>
                <p>Accordion Content Accordion Content</p>
                <p>Accordion Content</p>
                <p>Accordion Content</p>
              </Accordion>
              <Card/> */}
            </div>
            <Accordion title="Accordion Title">
              <p>Accordion Content Accordion Content</p>
              <p>Accordion Content</p>
              <p>Accordion Content</p>
              <p>Accordion Content</p>
            </Accordion>
            <Breadcrumb
              items={[
                { label: "Home" },
                { label: "Users", isActive: true },
                { label: "Muhammed" },
              ]}
            />
            <Drawer open={open} onClose={() => setOpen(false)} size="sm">
              {totalItems.map((i) => (
                <p key={i}>Hello Muhammed {i}</p>
              ))}
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
