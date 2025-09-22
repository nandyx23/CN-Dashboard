import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TableIcon, EthernetPort, Wifi } from "lucide-react";

export function DataTables() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Guided vs Unguided Comparison */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <TableIcon className="text-primary mr-2 h-5 w-5" />
          Guided vs Unguided
        </h3>
        <div className="overflow-x-auto" data-testid="table-guided-vs-unguided">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left p-2 font-medium">Aspect</TableHead>
                <TableHead className="text-left p-2 font-medium">Guided</TableHead>
                <TableHead className="text-left p-2 font-medium">Unguided</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-muted-foreground">
              <TableRow>
                <TableCell className="p-2 font-medium">Speed</TableCell>
                <TableCell className="p-2">High</TableCell>
                <TableCell className="p-2">Variable</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-2 font-medium">Cost</TableCell>
                <TableCell className="p-2">Medium</TableCell>
                <TableCell className="p-2">Low</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-2 font-medium">Interference</TableCell>
                <TableCell className="p-2">Low</TableCell>
                <TableCell className="p-2">High</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-2 font-medium">Security</TableCell>
                <TableCell className="p-2">High</TableCell>
                <TableCell className="p-2">Medium</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Guided Media Details */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <EthernetPort className="text-primary mr-2 h-5 w-5" />
          Guided Media Details
        </h3>
        <div className="overflow-x-auto" data-testid="table-guided-details">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left p-2 font-medium">Type</TableHead>
                <TableHead className="text-left p-2 font-medium">Speed</TableHead>
                <TableHead className="text-left p-2 font-medium">Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-muted-foreground">
              <TableRow>
                <TableCell className="p-2 font-medium">UTP</TableCell>
                <TableCell className="p-2">100 Mbps</TableCell>
                <TableCell className="p-2">Low</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-2 font-medium">STP</TableCell>
                <TableCell className="p-2">100 Mbps</TableCell>
                <TableCell className="p-2">Medium</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-2 font-medium">Coaxial</TableCell>
                <TableCell className="p-2">500 Mbps</TableCell>
                <TableCell className="p-2">Medium</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-2 font-medium">Fiber</TableCell>
                <TableCell className="p-2">10+ Gbps</TableCell>
                <TableCell className="p-2">High</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Unguided Media Details */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <Wifi className="text-primary mr-2 h-5 w-5" />
          Unguided Media Details
        </h3>
        <div className="overflow-x-auto" data-testid="table-unguided-details">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left p-2 font-medium">Type</TableHead>
                <TableHead className="text-left p-2 font-medium">Range</TableHead>
                <TableHead className="text-left p-2 font-medium">Use Case</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-muted-foreground">
              <TableRow>
                <TableCell className="p-2 font-medium">Radio</TableCell>
                <TableCell className="p-2">Global</TableCell>
                <TableCell className="p-2">Broadcasting</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-2 font-medium">Microwave</TableCell>
                <TableCell className="p-2">50 km</TableCell>
                <TableCell className="p-2">Point-to-Point</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-2 font-medium">Infrared</TableCell>
                <TableCell className="p-2">10 m</TableCell>
                <TableCell className="p-2">Line of Sight</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
