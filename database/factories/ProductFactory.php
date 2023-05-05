<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(4),
            'description' => $this->faker->paragraph(),
            'price' => 50.55,
            'user_id' => 1,
            'category_id' => 1,
            'image' => $this->faker->imageUrl(),
            'is_featured' => $this->faker->boolean(20),
            'quantity' => $this->faker->numberBetween(0, 100),
            'sku' => $this->faker->unique()->isbn10(),
        ];
    }
}
