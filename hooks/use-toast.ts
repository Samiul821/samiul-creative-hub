'use client'

import * as React from "react"
import { toast as sonnerToast } from "sonner"

type Toast = {
  title?: string
  description?: string
  action?: React.ReactNode
}

function toast(props: Toast | string) {
  if (typeof props === "string") {
    return sonnerToast(props)
  }

  const { title, description } = props

  return sonnerToast(title || "", {
    description,
  })
}

toast.success = (msg: string) => sonnerToast.success(msg)
toast.error = (msg: string) => sonnerToast.error(msg)
toast.info = (msg: string) => sonnerToast.info(msg)
toast.warning = (msg: string) => sonnerToast.warning(msg)

export { toast }