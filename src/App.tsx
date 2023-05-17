import { HTMLProps, useMemo, useState } from "react";
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
  Tooltip,
  SearchField,
} from "src/components";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { TableCheckBox } from "./components/table/TableCheckBox";

type TableItem = {
  name: string;
  price: number;
  quantity: number;
  delete: boolean;
  show: boolean;
};

type User = {
  firstName: string;
  lastName: string;
  age: number;
  dob?: string;
  email?: string;
  telephone: string;
  id: number;
};

function MyCell(row: any) {
  // console.log({ row });
  return <a href="#">kdgjkfdjfg</a>;
}

const pagination = {
  current_page: 1,
  from: 1,
  links: [
    {
      url: null,
      label: "&laquo; Previous",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=1",
      label: "1",
      active: true,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=2",
      label: "2",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=3",
      label: "3",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=4",
      label: "4",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=5",
      label: "5",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=6",
      label: "6",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=7",
      label: "7",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=8",
      label: "8",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=9",
      label: "9",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=10",
      label: "10",
      active: false,
    },
    {
      url: null,
      label: "...",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=17",
      label: "17",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=18",
      label: "18",
      active: false,
    },
    {
      url: "http://127.0.0.1:8000/api/admin/rides?page=2",
      label: "Next &raquo;",
      active: false,
    },
  ],
  next_page_url: "http://127.0.0.1:8000/api/admin/rides?page=2",
  per_page: 10,
  prev_page_url: null,
  to: 10,
  total: 180,
};

function App() {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(500);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState("Kasujja");

  const totalItems = Array.from(Array(100).keys());

  const dummyData = () => {
    const items: User[] = [];
    for (let i = 0; i < 10; i++) {
      items.push({
        firstName: `firstName ${i}`,
        lastName: `lastName ${i}`,
        age: 20 + i,
        dob: `2020-09- ${i}`,
        email: `email@me ${i}`,
        telephone: `telephone ${i}`,
        id: i,
      });
    }
    return items;
  };

  const cols = useMemo<ColumnDef<User>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <TableCheckBox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <TableCheckBox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      {
        header: "First Name",
        accessorKey: "firstName",
        cell: (row) => (
          <p className="text-slate-500 font-bold">
            {row.getValue() as React.ReactNode}
          </p>
        ),
      },
      {
        header: "Last Name",
        accessorFn: (d) => d.lastName,
      },
      {
        header: "Age",
        cell: (row) => row.renderValue(),
        accessorKey: "age",
      },
      {
        header: "DOB",
        cell: (row) => (
          <p className="text-red-500 font-medium">
            {row.getValue() as React.ReactNode}
          </p>
        ),
        accessorKey: "dob",
        footer: "Total",
      },
      // {
      //   header: "Telephone",
      //   cell: (row) => row.renderValue(),
      //   accessorKey: "telephone",
      //   footer: () => cartTotal,
      // },
      {
        header: "Email",
        cell: (row) => (
          <Select
            size="sm"
            options={[
              {
                label: "Arrea",
                value: 49,
              },
              {
                label: "Tuf",
                value: 43,
              },
            ]}
          />
        ),
        accessorKey: "email",
      },
      {
        header: "Action",
        cell: MyCell,
        accessorKey: "telephone",
        footer: () => cartTotal,
        getProps: () => ({ someFunc: () => alert("clicked") }),
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
                <Card>
                  <Table
                    data={dummyData()}
                    columns={cols}
                    showFooter
                    onSearch={(data) => {
                      console.log({ data });
                    }}
                    pagination={pagination}
                  />
                  <Tabs
                    tabs={[
                      { title: "Kato", component: <>Hoola</> },
                      {
                        title: "Muhammed",
                        component: (
                          <>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque perspiciatis fugit, illo quaerat
                            accusantium omnis, voluptates asperiores, quos sequi
                            pariatur voluptatibus necessitatibus est eaque dicta
                            accusamus excepturi laudantium porro maiores.
                          </>
                        ),
                      },
                      { title: "Musa", component: <>Hoola</> },
                      { title: "Joan", component: <>Muhammed</> },
                      { title: "Mulongo", component: <>Hoola</> },
                    ]}
                  ></Tabs>
                  <Checkbox
                    size="md"
                    name="test"
                    onChange={() => setChecked((prev) => !prev)}
                  />
                </Card>

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
                      <Tooltip
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit, officiis a ducimus repellat debitis vero sunt, minus veniam architecto rerum dicta eligendi quisquam provident incidunt? Officiis assumenda porro est."
                        // direction="top"
                      >
                        <Button
                        // onClick={() => {
                        //   setOpen((prev) => !prev);
                        // }}
                        >
                          Open Drawer
                        </Button>
                      </Tooltip>
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
                <Card>
                  <SearchField />
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
