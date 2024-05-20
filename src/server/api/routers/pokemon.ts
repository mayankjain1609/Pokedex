/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";

import {
  createTRPCRouter,
  // protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { TRPCError } from "@trpc/server";

export const pokemonRouter = createTRPCRouter({
  getPokemon: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input: { name }, ctx }) => {
      try {
        const ans = await ctx.db.pokemon.findFirst({
          where: { name },
          select: {
            id: true,
            name: true,
            types: true,
            sprite: true,
            detailPageURL: true,
            weaknesses: true , 
            abilities: true,
            collectibles_slug: true,
            featured: true,
            height: true,
            number: true,
            slug: true,
            ThumbnailAltText: true,
            weight: true
          },
        });
        return ans;
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),

  getMultiplePokemons: publicProcedure
    .input(z.object({ names: z.array(z.string()) }))
    .query(async ({ input: {names} , ctx }) => {
      try {
        const ans = await ctx.db.pokemon.findMany({
          where: {
            name: {
              in: names,
            },
          },
          select: {
            id: true,
            name: true,
            types: true,
            sprite: true,
            detailPageURL: true,
            weaknesses: true , 
            abilities: true,
            collectibles_slug: true,
            featured: true,
            height: true,
            number: true,
            slug: true,
            ThumbnailAltText: true,
            weight: true
          }
        });
        return ans;
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),

    getByType: publicProcedure
    .input(z.object({type: z.string()}))
    .query(async ({input: {type} , ctx }) => {
      try {
        const pokIds = await ctx.db.type.findMany({
          where: {typeName: type},
          select: {pokemonId: true}
        })

        const data = await ctx.db.pokemon.findMany({
          where: {
            id: {
              in: pokIds.map(a => a.pokemonId)
            }
          },
          select: {
            id: true,
            name: true,
            types: true,
            sprite: true,
            detailPageURL: true,
            weaknesses: true , 
            abilities: true,
            collectibles_slug: true,
            featured: true,
            height: true,
            number: true,
            slug: true,
            ThumbnailAltText: true,
            weight: true
          }
        })

        return data;

      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    })
});
