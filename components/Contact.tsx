"use client";
import React from 'react'
import { HoverEffect } from './ui/CardHoverEffect'

const Contact = () => {
  return (
    <div className="py-20" id='contact'>
      <h1 className="heading">
        My {' '}
        <span className="text-purple">Contact</span>
      </h1>
      <div className="mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Whatsapp",
    icon: "/whatsapp.svg",
    detail:
      "+6285155012135",
    desc:
      "Send A Message",
    link: "https://api.whatsapp.com/send?phone=6285155012135",
  },
  {
    title: "Gmail",
    icon: "/gmail.svg",
    detail:
      "gueldinehemia@gmail.com",
    desc:
      "Send A Message",
    link: "mailto:gueldinehemia@gmail.com",
  },
  {
    title: "LinkedIn",
    icon: "/linkedin.svg",
    detail:
      "Nehemia Gueldi",
    desc:
      "Send A Message",
    link: "https://www.linkedin.com/in/nehemiagueldi",
  },
];

export default Contact