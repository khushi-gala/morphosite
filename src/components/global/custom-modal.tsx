'use client'
import { useModal } from '@/providers/modal-provider'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '../ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'

type Props = {
  title: string
  subheading: string
  children: React.ReactNode
  defaultOpen?: boolean
}

const CustomModal = ({ children, defaultOpen, subheading, title }: Props) => {
  const { isOpen, setClose } = useModal()
  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
  <DialogContent className="w-full h-full max-h-screen md:max-h-[90vh] bg-card overflow-auto">
    <DialogHeader className="pt-8 text-left">
      <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
      <DialogDescription>{subheading}</DialogDescription>
      {children}
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default CustomModal