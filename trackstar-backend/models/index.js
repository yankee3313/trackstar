const User = require('./user')
const Favorite = require('./favorite')
const FavoritesList = require('./favoritesList')

User.hasOne(FavoritesList, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
  onDelete: 'CASCADE',
})
FavoritesList.belongsTo(User, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
})

FavoritesList.hasMany(Favorite, {
  foreignKey: {
    name: 'favoritesListId',
  },
  onDelete: 'CASCADE',
})
Favorite.belongsTo(FavoritesList, {
  foreignKey: {
    name: 'favoritesListId',
  },
})

module.exports = {
  Favorite,
  User,
  FavoritesList,
}
