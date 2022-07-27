import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.create({
    data: {
      name: 'Katy',
      email: 'katy@prisma.io',
      posts: {
        create: {
          title: 'Hello world',
          content: 'My first post!'
        }
      }
    }
  })
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
