import React from 'react';
import { AdminLayout } from '../components/AdminLayout';

type ChangeType = 'positive' | 'negative' | 'neutral';

interface Stat {
  title: string;
  value: string;
  change: string;
  changeType: ChangeType;
  icon: string;
}

export const Dashboard: React.FC = () => {
  // Mock data - in real app, this would come from API
  const stats: Stat[] = [
    {
      title: 'Active Calls',
      value: '8',
      change: '+2',
      changeType: 'positive',
      icon: '📞',
    },
    {
      title: 'Phone Numbers',
      value: '156',
      change: '+8',
      changeType: 'positive',
      icon: '📱',
    },
    {
      title: 'Total Call Logs',
      value: '1,247',
      change: '+156',
      changeType: 'positive',
      icon: '📋',
    },
    {
      title: 'Avg Call Duration',
      value: '4m 32s',
      change: '+12s',
      changeType: 'positive',
      icon: '⏱️',
    },
  ];

  const recentActivity = [
    { id: 1, action: 'Call completed successfully', time: '2 minutes ago', type: 'call' },
    { id: 2, action: 'New phone number added', time: '5 minutes ago', type: 'phone' },
    { id: 3, action: 'Call log generated', time: '12 minutes ago', type: 'log' },
    { id: 4, action: 'Live call answered', time: '18 minutes ago', type: 'call' },
    { id: 5, action: 'Call failed to connect', time: '1 hour ago', type: 'error' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your voice services.</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' :
                  stat.changeType === 'negative' ? 'text-red-600' :
                  stat.changeType === 'neutral' ? 'text-gray-600' :
                  'text-gray-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                   <div className={`w-2 h-2 rounded-full mr-4 ${
                     activity.type === 'call' ? 'bg-green-500' :
                     activity.type === 'phone' ? 'bg-purple-500' :
                     activity.type === 'log' ? 'bg-blue-500' :
                     'bg-red-500'
                   }`}></div>
                  <span className="text-sm text-gray-900">{activity.action}</span>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>


      </div>
    </AdminLayout>
  );
};