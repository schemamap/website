import {
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { getImageProps } from "next/image";
import {
  FiCheck,
  FiCheckCircle,
  FiRefreshCcw,
  FiSave,
  FiTable,
  FiUser,
} from "react-icons/fi";

const SyncEnvironmentsTab = () => {
  const common = { alt: "Sync Environments", width: 1800, height: 500 };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "static/images/env-sync.svg" });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: "static/images/env-sync-vertical.svg" });
  return (
    <TabPanel>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={"static/images/env-sync.svg"}
        />
        <source
          media="(max-width: 768px)"
          srcSet={"static/images/env-sync-vertical.svg"}
        />
        <img
          {...rest}
          alt={common.alt}
          style={{ width: "100%", height: "auto" }}
        />
      </picture>
    </TabPanel>
  );
};

export const HeroTabs = ({
  orientation,
}: {
  orientation: "horizontal" | "vertical" | undefined;
}) => {
  return (
    <Tabs
      align="center"
      variant="enclosed"
      colorScheme="primary"
      mt={10}
      orientation={orientation ?? "horizontal"}
    >
      <TabList display={{ base: "none", md: "flex" }}>
        <Tab>
          <Icon as={FiRefreshCcw} mr={2} />
          Sync environments
        </Tab>
        <Tab>
          <Icon as={FiSave} mr={2} />
          Import/Export spreadsheets
        </Tab>
        <Tab isDisabled title="Coming soon...">
          <Icon as={FiUser} mr={2} />
          Onboard tenants
        </Tab>
        <Tab isDisabled title="Coming soon...">
          <Icon as={FiCheckCircle} mr={2} />
          Backfill columns
        </Tab>
        <Tab isDisabled title="Coming soon...">
          <Icon as={FiTable} mr={2} />
          Schema tracking
        </Tab>
      </TabList>
      <TabPanels>
        <SyncEnvironmentsTab />
        <TabPanel>
          <Image
            src="/static/images/spreadsheet-import.svg"
            width={1800}
            height={500}
            alt="Import / Export Spreadsheets"
            priority
          />
        </TabPanel>
        <TabPanel>
          <Image
            src="/static/images/env-sync.svg"
            width={1800}
            height={500}
            alt="Onboard Tenants"
            priority
          />
        </TabPanel>
        <TabPanel>
          <Image
            src="/static/images/env-sync.svg"
            width={1800}
            height={500}
            alt="Backfill columns"
            priority
          />
        </TabPanel>
        <TabPanel>
          <Image
            src="/static/images/env-sync.svg"
            width={1800}
            height={500}
            alt="Schema tracking"
            priority
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
