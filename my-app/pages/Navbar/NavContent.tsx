import * as React from 'react';
import { Navbar, Dropdown, Button, Link, Text } from "@nextui-org/react";
import { icons } from "./Icons";

export default function NavContent() {
  return (
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
          <Navbar.Link isActive href="/projects">Projects</Navbar.Link>
          <Navbar.Link href="/rankings">Asset Rankings</Navbar.Link>
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
                <Navbar.Link href="../profiles/Edmond">Edmond Doan</Navbar.Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                icon={icons.activity}
              >
                <Navbar.Link href="/profiles/Edmond_Profile">Johnathan Doan</Navbar.Link>

              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="ACME runs on ACME, join us and others serving requests at web scale."
                icon={icons.flash}
              >
                 <Navbar.Link href="/rankings">Johnathan Doan</Navbar.Link>
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
    
  );
}
