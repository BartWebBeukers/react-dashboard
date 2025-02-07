// Chakra imports
import {
    Flex,
    Grid,
    Image,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";
  // assets
  import peopleImage from "assets/img/people-image.png";
  import logoChakra from "assets/svg/logo-white.svg";
  import BarChart from "components/Charts/BarChart";
  import LineChart from "components/Charts/LineChart";
  // Custom icons
  import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
  } from "components/Icons/Icons.js";
  import React from "react";
  import { dashboardTableData, timelineData } from "variables/general";
  import ActiveUsers from "../Dashboard/components/ActiveUsers";
  import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers";
  import MiniStatistics from "../Dashboard/components/MiniStatistics";
  import OrdersOverview from "../Dashboard/components/OrdersOverview";
  import Projects from "../Dashboard/components/Projects";
  import SalesOverview from "../Dashboard/components/SalesOverview";
  import WorkWithTheRockets from "../Dashboard/components/WorkWithTheRockets";
  
  export default function Dashboard() {
    const iconBoxInside = useColorModeValue("white", "white");
  
    return (
      <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
        <Grid
          templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
          templateRows={{ md: "1fr auto", lg: "1fr" }}
          my='26px'
          gap='24px'>
          <BuiltByDevelopers
            title={"Built by Developers"}
            name={"Purity UI Dashboard"}
            description={
              "From colors, cards, typography to complex elements, you will find the full documentation."
            }
            image={
              <Image
                src={logoChakra}
                alt='chakra image'
                minWidth={{ md: "300px", lg: "auto" }}
              />
            }
          />
          <WorkWithTheRockets
            backgroundImage={peopleImage}
            title={"Work with the rockets"}
            description={
              "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
            }
          />
        </Grid>
        <Grid
          templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
          templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
          gap='24px'
          mb={{ lg: "26px" }}>
          <ActiveUsers
            title={"Active Users"}
            percentage={23}
            chart={<BarChart />}
          />
          <SalesOverview
            title={"Sales Overview"}
            percentage={5}
            chart={<LineChart />}
          />
        </Grid>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap='24px'>
          <Projects
            title={"Projects"}
            amount={1}
            captions={["Companies", "Members", "Budget", "Completion"]}
            data={dashboardTableData}
          />
          <OrdersOverview
            title={"Orders Overview"}
            amount={30}
            data={timelineData}
          />
        </Grid>
      </Flex>
    );
  }
  