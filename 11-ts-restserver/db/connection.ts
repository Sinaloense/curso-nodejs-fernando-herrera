import { Sequelize } from 'sequelize';

const db = new Sequelize('11-ts-restserver', 'root', '', {
    host:       'localhost',
    dialect:    'mariadb',
    // logging:    false,
});

export default db;