import * as React from 'react';
import {Flex, Text, Box} from '@chakra-ui/react';
import MainNavigation from "../organisms/navigation.organism";


interface Props {
}

const ProfilePage: React.FC<Props> = (props) => {

    return <Flex flexDirection={"column"} color="white">
        <Box w="100%">
            <MainNavigation/>
        </Box>
        <Flex flexDirection={"row"}>
            <Box w="30%"  bg="tomato">
                <Text>Box 2</Text>
            </Box>
            <Box w="70%" bg="tomato">
                <Text>Box 3</Text>
            </Box>
        </Flex>
    </Flex>
}


export default ProfilePage;
