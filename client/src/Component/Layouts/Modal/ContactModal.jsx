import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {FormControl,FormLabel,Input} from '@chakra-ui/react'
import {Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
function ContactModal(props) {

            const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            <Button colorScheme='teal'onClick={onOpen}>Order</Button>
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Fill user info</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <FormControl>
  <FormLabel>Name</FormLabel><Input type='text' />
  <FormLabel>Email</FormLabel><Input type='email' />
  <FormLabel>Phone</FormLabel><Input type='tel' />
  <FormLabel>Address</FormLabel><Input type='address' />

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type='submit' variant='ghost'>Submit</Button>
                </ModalFooter>
</FormControl>
</ModalBody>

              </ModalContent>
            </Modal></>
    );
}

export default ContactModal;