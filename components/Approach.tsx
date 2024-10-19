import React from 'react'
import { AceternityIcon, CanvasRevealEffect, Card } from './ui/CanvasRevealEffect'

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className='heading'>My <span className="text-purple">Approach</span></h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card title="Planning & Strategy" icon={<AceternityIcon order="Phase 1" />} des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements.">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card title="Development & Progress Update" icon={<AceternityIcon order="Phase 2" />} des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card title="Development & Launch" icon={<AceternityIcon order="Phase 3" />} des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  )
}

export default Approach