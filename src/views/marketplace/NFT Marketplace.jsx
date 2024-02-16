import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import topImg from '../../assets/images/31448559_about_media_38ef19cd-33e8-4842-aa7c-2ca5473ae3a3.avif'

const  Marketplace = () => {
    const boxstyle = {
        width: '200px',
        height: '200px',
        background: 'red',
        borderRadius: '50%'
    }
    return (
        <>
           <Box className="topCont" h={'500px'} bg={`url(${topImg}) no-repeat 50% 50% / cover `}></Box>
            {/* <div>마켓플레이스 컨텐츠</div> */}
            {/* <Image src={topImg} alt=''></Image>
            <Image src="/logo192.png" alt=''></Image> */}
            <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum nulla porro officia
                            sequi consectetur neque. Maxime fugit enim quaerat autem id impedit perferendis quibusdam
                            suscipit modi! Quasi, suscipit laudantium.!
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae, numquam neque
                            ducimus dolor labore quasi enim magnam? Suscipit eaque natus quos eos consequatur fuga
                            cupiditate odio dolores pariatur soluta.!
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis culpa dolorem
                            porro repellat. Amet suscipit laudantium, a enim molestiae recusandae ratione iste in nemo
                            illum delectus debitis velit perferendis!!
                        </p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <motion.div
                style={boxstyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 100 }}
                transition={{ ease: 'easeOut', duration: 2 }}
            />

            <div style={{ height: '100vh' }}></div>
        </ >
    )
}

export default Marketplace