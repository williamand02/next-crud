import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clients = [
    new Client("Maria", 30, "1"),
    new Client("Bia", 46, "2"),
    new Client("william", 46, "3"),
    new Client("Pedro", 46, "4"),
  ];

  function clientExcluded(client: Client) {
    console.log("Excluded", client.name);
  }
  function clientSelected(client: Client) {
    console.log("Selected", client.name);
  }
  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}
    >
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button color="green" className="mb-4">
            Novo Cliente
          </Button>
        </div>
        <Table
          clients={clients}
          clientExcluded={clientExcluded}
          clientSelected={clientSelected}
        ></Table>
      </Layout>
    </div>
  );
}
