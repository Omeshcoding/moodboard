import { useCallback } from 'react';

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    sourcePosition: 'right',
    type: 'input',
    position: { x: 0, y: 300 },
    data: { label: 'Engagement Ceremony' },
  },
  {
    id: '2',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 300, y: 100 },
    data: { label: 'Mehendi (Henna) Ceremony' },
  },
  {
    id: '3',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 300, y: 200 },
    data: { label: 'Haldi Ceremony ' },
  },
  {
    id: '4',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 300, y: 300 },
    data: { label: 'Sangeet Ceremony ' },
  },
  {
    id: '5',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 300, y: 400 },
    data: { label: 'Bachelor/Bachelorette Party' },
  },
  {
    id: '6',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 300, y: 500 },
    data: { label: 'Bridal Shower' },
  },
  {
    id: '7',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 600, y: 100 },
    data: { label: 'Wedding Procession' },
  },
  {
    id: '8',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 600, y: 150 },
    data: { label: 'Exchange of Vows' },
  },
  {
    id: '9',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 600, y: 200 },
    data: { label: 'Exchange of Rings' },
  },
  {
    id: '10',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 600, y: 250 },
    data: { label: 'Kanyadaan' },
  },
  {
    id: '11',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 600, y: 350 },
    data: { label: 'Mangal Pheras' },
  },
  {
    id: '12',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 600, y: 400 },
    data: { label: 'Sindoor and Mangalsutra' },
  },
  {
    id: '13',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 600, y: 450 },
    data: { label: 'Pronouncement' },
  },
  {
    id: '14',
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: 600, y: 500 },
    data: { label: 'Reception' },
  },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-2a', source: '1', target: '3' },
  { id: 'e1-2b', source: '1', target: '4' },
  { id: 'e1-2c', source: '1', target: '5' },
  { id: 'e1-2d', source: '1', target: '6' },
  { id: 'e1-2da', source: '3', target: '7' },
  { id: 'e1-2de', source: '3', target: '8' },
  { id: 'e1-2def', source: '3', target: '9' },
  { id: 'e1-2dea', source: '3', target: '10' },
  { id: 'e1-2dea', source: '5', target: '11' },
  { id: 'e1-2dea', source: '5', target: '12' },
  { id: 'e1-2dea', source: '5', target: '13' },
  { id: 'e1-2dea', source: '5', target: '14' },
];

const PlanGround = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </>
  );
};

export default PlanGround;
