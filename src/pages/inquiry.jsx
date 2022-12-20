import Head from "next/head";
import Header from "../components/Header";
import Sidevar from "../components/Sidevar";
import { useState } from "react";
import {
  NativeSelect,
  NumberInput,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core";
import { IconAt } from "@tabler/icons";

const Inquiry = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Head>
        <title>問い合わせフォーム</title>
      </Head>
      <Header />
      <div>
        <div className="flex">
          <div className="w-1/6">
            <Sidevar />
          </div>
          <div className="mx-20 my-10 w-5/6">
            <div className="my-10 font-bold text-4xl">お問い合わせ</div>
            <TextInput
              placeholder="Your name"
              label="Full name"
              withAsterisk
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
            <TextInput
              label="Your email"
              placeholder="Your email"
              icon={<IconAt size={14} />}
              withAsterisk
            />
            <NumberInput
              defaultValue={20}
              placeholder="Your age"
              label="Your age"
              withAsterisk
            />
            <NativeSelect
              data={["---", "about our company", "recueit", "jobs", "others"]}
              label="Select your question"
              withAsterisk
            />
            <Textarea placeholder="Your comment" label="Your comment" />
            <Button className="border-2 border-gray-500 bg-pink-200">
              ボタン
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Inquiry;
