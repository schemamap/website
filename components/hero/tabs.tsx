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
      <Stack
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
        spacing={10}
      >
        <Image
          src="https://source.unsplash.com/random"
          width={500}
          height={400}
          alt="Sync Environments"
        />

        <Text>
          Schemamap.io allows you to sync your development, staging, and
          production environments with ease. You can easily compare and contrast
          your schemas and track changes over time.
        </Text>
      </Stack>
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
      orientation={orientation ?? "horizontal"}
    >
      <TabList>
        <Tab>
          <Icon as={FiRefreshCcw} mr={2} />
          Sync environments
        </Tab>
        <Tab>
          <Icon as={FiSave} mr={2} />
          Import/Export spreadsheets
        </Tab>
        <Tab>
          <Icon as={FiUser} mr={2} />
          Onboard tenants
        </Tab>
        <Tab>
          <Icon as={FiCheckCircle} mr={2} />
          Backfill columns
        </Tab>
        <Tab>
          <Icon as={FiTable} mr={2} />
          Schema tracking
        </Tab>
      </TabList>
      <TabPanels>
        <SyncEnvironmentsTab />
        <TabPanel>
          <Image
            src="https://source.unsplash.com/random"
            width={500}
            height={300}
            alt="Sync Environments"
          />
          Import Export CSV
        </TabPanel>
        <TabPanel>
          <Image
            src="https://source.unsplash.com/random"
            width={500}
            height={400}
            alt="Sync Environments"
          />
          Tenant Onboarding
        </TabPanel>
        <TabPanel>
          <Image
            src="https://source.unsplash.com/random"
            width={500}
            height={400}
            alt="Sync Environments"
          />
          Backfill Columns
        </TabPanel>
        <TabPanel>
          <Image
            src="https://source.unsplash.com/random"
            width={500}
            height={400}
            alt="Sync Environments"
          />
          Schema Tracking
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
