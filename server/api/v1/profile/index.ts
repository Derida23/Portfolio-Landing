import { experiences } from "~/constants"

export default defineEventHandler(() => {
  const data = {
    abouts: {
      first_paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus eius repellendus, odit recusandae nemo minus vitae nam nostrum qui explicabo rerum numquam molestias esse facere corrupti aut eum placeat! Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      second_paragraph: 'Vero harum! Minus laudantium id natus atque ipsam? lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae eum nostrum explicabo optio, quam cupiditate ad blanditiis eius architecto adipisci earum',
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
