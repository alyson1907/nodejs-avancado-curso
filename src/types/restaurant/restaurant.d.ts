export type CreateRestaurantRequestDTO = {
  name: string;
  description: ?string;
};

export type UpdateRestaurantRequestDTO = Partial<CreateRestaurantDTO>;
