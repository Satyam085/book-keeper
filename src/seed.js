// const { PrismaClient } = require("@prisma/client");
// const fs = require("fs");
// const csv = require("csv-parser");

// const prisma = new PrismaClient();

// async function parseCSVAndCreateRecords() {
//   try {
//     const results = [];
//     fs.createReadStream("data.csv")
//       .pipe(csv())
//       .on("data", (data) => results.push(data))
//       .on("end", async () => {
//         for (const row of results) {
//           try {
//             await prisma.books.create({
//               data: {
//                 ISBN: row.id,
//                 title: row.title,
//                 distribution_expense: parseInt(row.distribution_expense) * 100,
//                 publishedDate: new Date(row.published_date),
//                 subtitle: row.subtitle,
//                 Publisher: {
//                   connectOrCreate: {
//                     where: {
//                       publisher: row.publisher,
//                     },
//                     create: {
//                       publisher: row.publisher,
//                     },
//                   },
//                 },
//                 Category: {
//                   connectOrCreate: {
//                     where: {
//                       category: row.category,
//                     },
//                     create: {
//                       category: row.category,
//                     },
//                   },
//                 },
//                 authors: {
//                   connectOrCreate: {
//                     where: {
//                       author: row.authors,
//                     },
//                     create: {
//                       author: row.authors,
//                     },
//                   },
//                 },
//                 enterdBy: {
//                   connectOrCreate: {
//                     where: {
//                       email: "Admin",
//                     },
//                     create: {
//                       email: "Admin",
//                     },
//                   },
//                 },
//               },
//             });
//           } catch (error) {
//             console.error("Error creating record:", error);
//           }
//         }
//         console.log("Records created successfully");
//       });
//   } catch (error) {
//     console.error("Error creating records:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// parseCSVAndCreateRecords();
