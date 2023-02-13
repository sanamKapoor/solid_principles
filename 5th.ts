class Service {
    connection!: ConnectionInterface;

    attach() {
        this.connection.connect();
    }
}

class SQLDBConnection implements ConnectionInterface {
    connect(): void {
        console.log("SQL DB Connected");
    }
}

class NoSQLDBConnection implements ConnectionInterface {
    connect(): void {
        console.log("NoSQL DB Connected");
    }
}

interface ConnectionInterface {
    connect(): void;
}

const service = new Service();
// service.connection = new SQLDBConnection();
service.connection = new NoSQLDBConnection();
service.attach();