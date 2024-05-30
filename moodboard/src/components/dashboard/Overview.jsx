import Card from './Card';

const Overview = () => {
  const cardData = [
    {
      title: 'Upcoming Events',
      desc: 'No events for today',
      bgColor: '#DBEAFE',
      titleColor: '#1E40AF',
      descColor: '#1D4ED8',
    },
    {
      title: 'Tasks',
      desc: '4 tasks remaining',
      bgColor: '#DCFCE7',
      titleColor: '#166534',
      descColor: '#15803D',
    },
    {
      title: 'Messages',
      desc: '2 new messages',
      bgColor: '#FEF9C3',
      titleColor: '#854D0E',
      descColor: '#A16207',
    },
    {
      title: 'Notifications',
      desc: '1 new alert',
      bgColor: '#FEE2E2',
      titleColor: '#991B1B',
      descColor: '#B91C1C',
    },
  ];

  return (
    <section className="overview">
      <p className="overview-title">Overview</p>
      <div className="card_container">
        {cardData.map((item, index) => {
          return (
            <Card
              title={item.title}
              key={index}
              desc={item.desc}
              bgColor={item.bgColor}
              titleColor={item.titleColor}
              descColor={item.descColor}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Overview;
