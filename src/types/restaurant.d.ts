// TODO trocar por Omit<Restaurant, 'id', 'createdAt', ...> em módulos futuros
export type CreateRestaurantRequestDTO = {
  name: string;
  description: ?string;
};

export type UpdateRestaurantRequestDTO = Partial<CreateRestaurantDTO>;
