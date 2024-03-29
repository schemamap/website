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
import {
  FiCheck,
  FiCheckCircle,
  FiRefreshCcw,
  FiSave,
  FiTable,
  FiUser,
} from "react-icons/fi";

const SyncEnvironmentsTab = () => {
  return (
    <TabPanel>
      <Image
        src="/static/images/env-sync.svg"
        width={1800}
        height={500}
        alt="Sync Environments"
        priority
      />
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
      <TabList>
        <Tab>
          <Icon as={FiRefreshCcw} mr={2} />
          Sync environments
        </Tab>
        <Tab isDisabled title="Coming soon...">
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
            src="/static/images/env-sync.svg"
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
