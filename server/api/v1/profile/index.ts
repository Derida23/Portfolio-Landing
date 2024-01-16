import { experiences } from "~/constants"

export default defineEventHandler(() => {
  const data = {
    abouts: {
      first_paragraph:
        '<p class="mb-4" ref="about"> Fullstack Engineer with a primary focus on Frontend development. I have a strong passion for JavaScript and am dedicated to creating applications that can positively impact many people. With <b class="text-white"> 5 years of programming experience</b>, I continue to learn everything related to this technology.</p>',
      second_paragraph: 'In addition to working as a Frontend Engineer, I also have an interest in data-related aspects and a strong passion for design. The combination of skills in Frontend, data understanding, and appreciation for design enables me to create holistic and innovative user experiences.',
      third_paragraph: 'To see more about what I`ve been doing for the past 5 years, you can check the next section.'
    },
    experiences,
    projects: []
  }

  return {
    data,
    message: 'Success retrieve data'
  }
})
