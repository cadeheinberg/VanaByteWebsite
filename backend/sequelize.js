const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
});

const WebUserData = sequelize.define(process.env.DB_TABLE_WEB_DATA, {
    web_uuid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    mc_uuid: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    }
}, {
    timestamps: false,
    tableName: process.env.DB_TABLE_WEB_DATA
});

const WebForumPosts = sequelize.define(process.env.DB_TABLE_WEB_FORUM_POSTS, {
    post_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    web_uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: WebUserData,
            key: "web_uuid"
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dislikes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: process.env.DB_TABLE_WEB_FORUM_POSTS
});

const Stats = sequelize.define(process.env.DB_TABLE_MINECRAFT_STATS, {
    mc_uuid: {
        type: DataTypes.STRING,
        primaryKey: true,
        field: 'UUID' // UUID is the name in the actual table
    },
    playerName: {
        type: DataTypes.STRING,
        field: 'PlayerName'
    },
    server_cakes: {
        type: DataTypes.INTEGER,
        field: 'server_cakes'
    },
    server_level: {
        type: DataTypes.INTEGER,
        field: 'server_level'
    },
    server_xp: {
        type: DataTypes.INTEGER,
        field: 'server_xp'
    },
    kitpvp_kit_id: {
        type: DataTypes.INTEGER,
        field: 'kitpvp_kit_id'
    },
    kitpvp_kills: {
        type: DataTypes.INTEGER,
        field: 'kitpvp_kills'
    },
    kitpvp_killstreak: {
        type: DataTypes.INTEGER,
        field: 'kitpvp_killstreak'
    },
    kitpvp_deaths: {
        type: DataTypes.INTEGER,
        field: 'kitpvp_deaths'
    },
    unlocked_kit_00: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_00'
    },
    unlocked_kit_01: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_01'
    },
    unlocked_kit_02: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_02'
    },
    unlocked_kit_03: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_03'
    },
    unlocked_kit_04: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_04'
    },
    unlocked_kit_05: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_05'
    },
    unlocked_kit_06: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_06'
    }
}, {
    timestamps: false,
    tableName: process.env.DB_TABLE_MINECRAFT_STATS,
    freezeTableName: true
});


const syncDatabase = async () => {
    try {
        await sequelize.sync();
        //await sequelize.sync({ force: true });
        console.log(`Tables are synced and ready`);
    } catch (err) {
        console.error('Unable to sync the database:', err);
    }
};

module.exports = { sequelize, WebUserData, WebForumPosts, Stats, syncDatabase };
