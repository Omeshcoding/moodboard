import { useCallback, useState } from 'react';

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
} from 'reactflow';

import 'reactflow/dist/style.css';
import Sidebar from '../components/Sidebar';
import { Menu, X } from 'lucide-react';
import axios from 'axios';

const transformDataToNodes = (data) => {
  if (!data || !data.chapters) {
    console.error('Invalid data structure:', data);
    return { nodes: [], edges: [] };
  }
  let yPos = 0;
  const nodes = [];
  const edges = [];
  const chapters = Object.keys(data.chapters);

  chapters.forEach((chapter, chapterIndex) => {
    data.chapters[chapter].forEach((module, moduleIndex) => {
      const nodeId = `${chapterIndex}-${moduleIndex}`;
      nodes.push({
        id: nodeId,
        sourcePosition: 'right',
        targetPosition: 'left',
        position: { x: chapterIndex * 300, y: yPos },
        data: { label: module.moduleName },
      });
      yPos += 100;

      if (moduleIndex > 0) {
        const prevNodeId = `${chapterIndex}-${moduleIndex - 1}`;
        edges.push({
          id: `e${prevNodeId}-${nodeId}`,
          source: prevNodeId,
          target: nodeId,
          animated: true,
        });
      }
    });
  });

  return { nodes, edges };
};
const PlanGround = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleFlowChart = (val) => {
    setName(val);
  };
  const handleSendData = async () => {
    if (name === '') {
      console.log('enter search parameters');
      return;
    }
    try {
      const response = await axios.post(
        'https://shubh-manglam-planning.vercel.app/api/AI/planner',
        {
          query: 'Plan wedding dress shopping',
        }
      );
      const apiData = response.data;

      if (!apiData || typeof apiData !== 'object' || !apiData.answer) {
        throw new Error('Invalid API response');
      }
      const jsonString = apiData.answer.match(/```json\n([\s\S]*?)\n```/)[1];
      const parsedData = JSON.parse(jsonString);

      const { nodes, edges } = transformDataToNodes(parsedData);
      setNodes([...nodes]);
      setEdges([...edges]);
      setName('');
    } catch (error) {
      console.error('Error fetching data from API', error);
    }
  };

  const boardsData = [
    {
      imgUrl: '/canvas1.png',
      title: 'Clothes',
    },
    {
      imgUrl: '/canvas2.png',
      title: 'Makeup Inspo',
    },
    {
      imgUrl: '/canvas3.png',
      title: 'Venues',
    },
    {
      imgUrl: '/canvas4.png',
      title: 'Venue 2',
    },
  ];
  return (
    <>
      <button
        type="button"
        className={`mt-5 bg-[#770C15] p-3 rounded-md fixed sm:right-10 right-2 md:hidden z-50 ${
          !show && 'text-[#ede8e8]'
        }`}
        onClick={() => setShow(!show)}
      >
        {!show ? <Menu color="#ede8e8" /> : <X color="#ede8e8" />}
      </button>
      <Sidebar
        title="Planground"
        tags={['Square', 'Line', 'Dimond', 'Boolean']}
        boards={boardsData}
        show={show}
        name={name}
        handleFlowChart={handleFlowChart}
        handleSendData={handleSendData}
      />
      <div style={{ width: '88vw', height: '100vh' }} className="ml-auto ">
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
