import * as React from 'react';
import {Flex, Text, Box, Tab, TabList, TabPanel, TabPanels, Tabs, Heading, Button} from '@chakra-ui/react';
import MainNavigation from "../organisms/navigation.organism";


interface Props {
}

const ProfilePage: React.FC<Props> = (props) => {

    return <Flex flexDirection={"column"} color="white">
        <Box w="100%">
            <MainNavigation/>
        </Box>
        <Flex flexDirection={"row"}>
            <Tabs variant="soft-rounded" colorScheme="active" w="100%" display="flex" flexDirection="row">
                <TabList pt="50px" h="100%" w="30%" display="flex" flexDirection="column">
                    <Tab border="0">General</Tab>
                    <Tab border="0">Plan</Tab>
                    <Tab border="0">API</Tab>
                    <Tab border="0">Security</Tab>
                    <Tab border="0">Notifications</Tab>
                    <Tab border="0">Billing History</Tab>
                    <Tab border="0">Legal</Tab>
                </TabList>

                <TabPanels w="70%">
                    <TabPanel>
                        <Box p="8">
                            <Heading fontSize="24">General</Heading>
                            <Box>
                                <Text>Generate your unique key to access Galactic Data™</Text>
                                <Box mt="4" mb="4">
                                    <Text fontWeight="600" color="midnight.100">Your email</Text>
                                    <Box m="0" borderRadius="4" bg="gray.100"><Text
                                        p="4">test@biorelate.tech</Text></Box>
                                </Box>
                                <Box mt="4" mb="4">
                                    <Text fontWeight="600" color="midnight.100">Your nickname</Text>
                                    <Box m="0" borderRadius="4" bg="gray.100"><Text p="4">test</Text></Box>
                                </Box>

                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Heading fontSize="24">Plan</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading fontSize="24">API</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Box p="8">
                            <Heading fontSize="24">Access Token</Heading>
                            <Box>
                                <Text>Generate your unique key to access Galactic Data™</Text>
                                <Box mt="4" mb="4">
                                    <Text fontWeight="600" color="midnight.100">Your unique key</Text>
                                    <Box m="0" borderRadius="4" bg="active.100"><Text
                                        p="4">0000-0000-0000-0000</Text></Box>
                                </Box>
                                <Button size="lg" bg="blue.100" onClick={() => {
                                    console.log('generaate')
                                }}>Generate Key</Button>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Heading fontSize="24">Notificatios</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading fontSize="24">Billing History</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading fontSize="24">Legal</Heading>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </Flex>
    </Flex>
}


export default ProfilePage;
