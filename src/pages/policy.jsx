import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import { useState } from "react";
import {
  Anchor,
  AspectRatio,
  Breadcrumbs,
  Button,
  Card,
  Collapse,
  Image,
} from "@mantine/core";
import Side2 from "../components/Side2";

const Policy = () => {
  const [opened, setOpened] = useState(false);
  const items = [
    { title: "HOME", href: "/" },
    { title: "当社の理念", href: "/policy" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>当社の理念</title>
      </Head>
      <Header />
      <div className="h-full flex">
        <div className="w-1/6">
          <Side2 />
        </div>
        <div className="w-5/6 pb-40 pt-10 mx-10">
          <div className="flex justify-end bg-red-100 h-[30px]">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="my-10 text-4xl font-bold">当社の理念</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            rerum aut fugiat, distinctio blanditiis voluptatum debitis sequi.
            Illo harum omnis natus vel ullam expedita pariatur doloribus dicta,
            minus iste sit!
          </div>
          <div>
            <Button
              className="bg-blue-500 my-10"
              onClick={() => setOpened((o) => !o)}
            >
              代表からの言葉
            </Button>
            <Collapse in={opened}>
              <div className="flex">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque rerum aut fugiat, distinctio blanditiis voluptatum
                  debitis sequi. Illo harum omnis natus vel ullam expedita
                  pariatur doloribus dicta, minus iste sit!
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque rerum aut fugiat, distinctio blanditiis voluptatum
                  debitis sequi. Illo harum omnis natus vel ullam expedita
                  pariatur doloribus dicta, minus iste sit!
                </div>
                <div className="mx-10">
                  <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                      <Image
                        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={150}
                        alt="Norway"
                      />
                    </Card.Section>
                  </Card>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="flex justify-between">
            <div className="mb-10 w-1/2">
              <div className="text-xl mb-10 text-center">当社の取り組み</div>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/Dorf8i6lCuk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
            <div className="mb-10 w-1/2 mx-10">
              <div className="text-xl mb-10 text-center">現場風景</div>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/Dorf8i6lCuk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </div>
          <div className="my-20">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
