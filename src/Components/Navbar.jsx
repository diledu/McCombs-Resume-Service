import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
  ButtonGroup,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import ContactForm from "./ContactForm";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("About Us");
  const navigate = useNavigate(); // Using useNavigate hook for smooth navigation

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    setOpenNav(false); // Close the mobile navigation if open
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleSignUpClick = () => {
    navigate("/signup"); // Navigate to the sign-up page
  };

  const cardContent = {
    "About Us": {
      title: "McCombs Resume Builder",
      description:
        "Can you help me out? you will get a lot of free exposure doing this...",
      image:
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    },
    Account: {
      title: "Account Management",
      description: "Manage your account details and preferences...",
      image:
        "https://images.unsplash.com/photo-1516822003754-cca485356ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8fHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    },
    Blocks: {
      title: "Blocks Overview",
      description: "Explore different content blocks and layouts...",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8fHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    },
    "Contact Us": {
      title: "Contact Us",
      description: "Get in touch with our support team...",
      image:
        "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8fHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    },
  };

  const transitions = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0.5, transform: "translateY(40px)" },
    reset: true,
  });

  const cardSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0.5, transform: "translateY(40px)" },
  });

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["About Us", "Account", "Blocks", "Contact Us"].map((tab) => (
        <Typography
          key={tab}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <ButtonGroup variant="text">
            <Button onClick={() => handleTabClick(tab)}>{tab}</Button>
          </ButtonGroup>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="-m-6 max-h-screen overflow-hidden">
      <MTNavbar className="sticky top-6 z-10 h-max max-w-full rounded-none px-10 py-2 lg:px-20 lg:py-4 shadow-lg">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-lg"
          >
            McCombs Resume Builder
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={handleLoginClick} // Handle Log In button click
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={handleSignUpClick} // Handle Sign Up button click
              >
                <span>Sign Up</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
              aria-label={openNav ? "Close navigation menu" : "Open navigation menu"}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" onClick={handleLoginClick}>
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" onClick={handleSignUpClick}>
              <span>Sign Up</span>
            </Button>
          </div>
        </Collapse>
      </MTNavbar>
      <div className="mx-auto max-w-screen py-12 px-8 lg:px-10">
        <animated.div style={transitions}>
          <Card className="border border-gray-300 shadow-lg mb-12 overflow-hidden flex flex-col lg:flex-row h-[80vh]">
            <animated.img
              alt={cardContent[currentTab].title}
              className="h-full w-full object-cover object-center lg:w-1/2"
              src={cardContent[currentTab].image}
              style={cardSpring}
            />
            <animated.div
              className="p-6 lg:w-1/2 flex flex-col justify-center"
              style={cardSpring}
            >
              <Typography variant="h2" color="blue-gray" className="mb-2">
                {cardContent[currentTab].title}
              </Typography>
              <Typography color="gray" className="font-normal">
                {currentTab === "Contact Us" ? (
                  <ContactForm onSubmit={(data) => console.log(data)} />
                ) : (
                  cardContent[currentTab].description
                )}
              </Typography>
              {currentTab === "About Us" && (
                <Button
                  className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => navigate("/Dashboard")}
                >
                  Get Started
                </Button>
              )}
            </animated.div>
          </Card>
        </animated.div>
      </div>
    </div>
  );
}
