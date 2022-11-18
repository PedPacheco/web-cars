import { Prisma } from "@prisma/client";
import { CreateVehicleAdBoundary } from "../../core/boundary/CreateVehicleAdBoundary";
import { CreateVehicleAdRequest } from "../../entrypoint/requests/CreateVehicleAdRequest";
import { prisma } from "./../client/prisma";

export class CreateVehicleAdGateway implements CreateVehicleAdBoundary {
  public async execute({
    userId,
    brand,
    model,
    version,
    modelYear,
    yearOfManufacture,
    color,
    kmTraveled,
    description,
    price,
    photos,
  }: CreateVehicleAdRequest) {
    const vehicleJson = photos as unknown as Prisma.JsonArray;
    const vehicleAd = await prisma.vehicles.create({
      data: {
        brand,
        model,
        modelYear,
        yearOfManufacture,
        version,
        color,
        kmTraveled,
        description,
        price,
        photos: vehicleJson,
        user: { connect: { id: userId } },
      },
    });

    return vehicleAd;
  }
}
