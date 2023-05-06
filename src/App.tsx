import { useMemo, useState } from "react";
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
  Navbar,
  Card,
  Tabs,
  Table,
  Dropzone,
  FileInput,
  TextArea,
  RadioButton,
  RadioGroup,
} from "src/components";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import { ColumnDef } from "@tanstack/react-table";

type TableItem = {
  name: string;
  price: number;
  quantity: number;
  delete: boolean;
  show: boolean;
};

function App() {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(500);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState("Kasujja");

  const totalItems = Array.from(Array(100).keys());

  const dummyData = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push({
        id: i,
        name: `Item ${i}`,
        price: 100,
        quantity: 1,
        delete: false,
        show: true,
      });
    }
    return items;
  };

  const cols = useMemo<ColumnDef<TableItem>[]>(
    () => [
      {
        header: "Name",
        cell: (row) => row.renderValue(),
        accessorKey: "name",
        footer: "Total",
      },
      {
        header: "Price",
        cell: (row) => row.renderValue(),
        accessorKey: "price",
        footer: () => cartTotal,
      },
      {
        header: "Quantity",
        cell: (row) => row.renderValue(),
        accessorKey: "quantity",
      },
    ],
    [cartTotal]
  );

  return (
    <>
      <div className="h-screen p-0 overflow-hidden bg-slate-200">
        <div className="flex h-full">
          <Sidebar />

          {/* Main Content */}
          <div className="flex flex-col w-full">
            <Navbar profileMenu={<>Kasujja Muhammed</>} />
            <main className="p-4 overflow-y-auto">
              <div className="py-3">
                <Breadcrumb
                  items={[
                    { label: "Home" },
                    { label: "Users", isActive: true },
                    { label: "Muhammed" },
                  ]}
                />
              </div>

              <div className="flex flex-wrap items-start w-full gap-4 p-4 rounded-lg bg-slate-300 ">
                {/* <form
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
                  <Checkbox size="md" name="test" onCheckChange={() => setChecked(prev => !prev)} />
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
                  <TextField name="name" error />
                  <TextField name="aasim" />

                  <Switch name="select" isDisabled />
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
                  <Accordion title="Accordion Title">
                    <p>
                      Accordion Contenhghghghghghghg Accordion Content Accordion
                      Content
                    </p>
                    <p>Accordion Content Accordion Content</p>
                    <p>Accordion Content</p>
                    <p>Accordion Content</p>
                  </Accordion>
                  <Tabs></Tabs>
                </div> */}
                <div className="w-full px-10 py-5">
                  <Card>
                    <Table
                      data={dummyData()}
                      columns={cols}
                      showFooter
                      onSearch={(data) => {
                        console.log({ data });
                      }}
                    />
                  </Card>
                  {/* .... */}
                </div>

                <Drawer open={open} onClose={() => setOpen(false)} size="sm">
                  {totalItems.map((i) => (
                    <p key={i}>Hello Muhammed {i}</p>
                  ))}
                </Drawer>
                {/* <Modal
                  open={open}
                  autoHide
                  onClose={() => setOpen(false)}
                  title={"Hello Muhammed"}
                  verticalAlign="center"
                  size="sm"
                  footer={"Good luck"}
                >
                  {totalItems.map((i) => (
                    <p key={i}>Hello Muhammed {i}</p>
                  ))}
                </Modal> */}
                <Card header="Create user">
                  <form>
                    <div className="grid grid-cols-2 gap-4">
                      <TextField placeholder="Holla" />
                      <TextField
                        name="first_name"
                        value={name}
                        onChange={setName}
                        label="Name"
                      />
                      <TextField />
                      <TextField />
                      <TextField />
                      <TextField />
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

                      <RadioGroup
                        name="gender"
                        options={[
                          { label: "Male", value: "male" },
                          { label: "Female", value: "female" },
                          { label: "Others", value: "others" },
                        ]}
                        value={"others"}
                        onChange={(e) => {
                          console.log("Changed value", e);
                        }}
                      />
                    </div>
                    <div className="flex justify-between pt-6">
                      <Button>SAVE</Button>
                      <Button outlined variant="danger">
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Card>

                <Card
                  header={
                    <div className="flex justify-between">
                      <p>Add User</p>
                      <Button
                        onClick={() => {
                          setOpen((prev) => !prev);
                        }}
                      >
                        Open Drawer
                      </Button>
                    </div>
                  }
                >
                  <Dropzone />
                  <FileInput
                    title="Change profile"
                    hint="PNG, JPEG (500x500) px"
                    handleChange={(file) => {}}
                  />
                  <TextArea
                    label="Your comment"
                    onChange={(value) => {}}
                    rows={5}
                    placeholder="Holla we dem boys"
                  />
                </Card>
                <Button
                  type="button"
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                >
                  Open Drawer
                </Button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
