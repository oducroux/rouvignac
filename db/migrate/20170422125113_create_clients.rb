class CreateClients < ActiveRecord::Migration[5.0]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.string :address
      t.integer :postal_code
      t.string :city
      t.integer :number

      t.timestamps
    end
  end
end