import { experiences } from "~/constants"

export default defineEventHandler(() => {
  const data = {
    abouts: {
      first_paragraph: 'Fullstack Engineer with a primary focus on Frontend development. I have a strong passion for JavaScript and am dedicated to creating applications that can positively impact many people. With 4 years of programming experience, I continue to learn everything related to this technology.',
      second_paragraph: 'In addition to working as a Frontend Engineer, I also have an interest in data-related aspects and a strong passion for design. The combination of skills in Frontend, data understanding, and appreciation for design enables me to create holistic and innovative user experiences.',
      third_paragraph: 'Consectetur adipisicing elit lorem ipsum dolor sit amet . Harum, tenetur natus? Fuga, sequi?'
    },
    experiences,
    projects: []
  }

  return {
    data,
    message: 'Success retrieve data'
  }
})
