import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react'
import styles from '../styles/Home.module.css'
import { Navbar, Dropdown, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "../pages/Navbar/Layout";
import { icons } from "../pages/Navbar/Icons";

export default function Home() {
  return (
    <NextUIProvider>
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
        <img src="../dragonlogo.svg" alt="An SVG of an eye" />

          <Text b color="inherit" hideIn="xs">
            ALPHA SLAYERS
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="underline"
        >
          <Navbar.Link isActive href="#">
            Projects
          </Navbar.Link>
          <Navbar.Link href="#">Asset Rankings</Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Team
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                showFullDescription
                description="ACME scales apps to meet user demand, automagically, based on load."
                icon={icons.scale}
              >
                Edmond Doan
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                icon={icons.activity}
              >
                Johnathan Doan
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="ACME runs on ACME, join us and others serving requests at web scale."
                icon={icons.flash}
              >
                Jackie Le
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Connect Wallet
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
     </NextUIProvider>
  );
}
