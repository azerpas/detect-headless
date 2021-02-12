import { Td, Tr } from "@chakra-ui/react"
import React from "react"

export const Properties = () => {
    return(
        <>
            <Tr>
                <Td>window.navigator.userAgent</Td>
                <Td background={"green"}>
                    {
                        window.navigator.userAgent.replace(/\\|"/g, '')
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window.webdriver</Td>
                <Td background={window.webdriver ? "red" : "green"}>
                    {
                        window.webdriver ? 1 : 0 
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window._phantom</Td>
                <Td background={window._phantom ? "red" : "green"}>
                    {
                        window._phantom ? 1 : 0 
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window._phantom</Td>
                <Td background={window._phantom ? "red" : "green"}>
                    {
                        window._phantom ? 1 : 0 
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window.chrome.webstore</Td>
                <Td background={window.chrome?.webstore ? "red" : "green"}>
                    {
                        window.chrome?.webstore ? 1 : 0 
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection</Td>
                <Td background={window.RTCPeerConnection || ('function' == typeof window.mozRTCPeerConnection) || ('function' == typeof window.webkitRTCPeerConnection) ? "green" : "red"}>
                    {
                        window.RTCPeerConnection || ('function' == typeof window.mozRTCPeerConnection) || ('function' == typeof window.webkitRTCPeerConnection) ? 1 : 0 
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_</Td>
                <Td background={window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? "red" : "green"}>
                    {
                        window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? 1 : 0 
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window.document.documentElement.getAttribute('webdriver')</Td>
                <Td background={window.document.documentElement.getAttribute('webdriver') ? "red" : "green"}>
                    {
                        window.document.documentElement.getAttribute('webdriver') ? 1 : 0 
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window.XPathResult || void 0 !== document.XPathResult</Td>
                <Td background={window.XPathResult || void 0 !== document.XPathResult ? "green" : "red"}>
                    {
                        window.XPathResult || void 0 !== document.XPathResult ? 1 : 0 
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window.document.documentElement.getAttribute('driver')</Td>
                <Td background={!window.document.documentElement.getAttribute('driver') ? "green" : "red"}>
                    {
                        window.document.documentElement.getAttribute('driver') ? 1 : 0 
                    }
                </Td>
            </Tr>
            <Tr>
                <Td>window.document.documentElement.getAttribute('selenium')</Td>
                <Td background={!window.document.documentElement.getAttribute('selenium') ? "green" : "red"}>
                    {
                        window.document.documentElement.getAttribute('selenium') ? 1 : 0 
                    }
                </Td>
            </Tr>
            
        </>
    )
}