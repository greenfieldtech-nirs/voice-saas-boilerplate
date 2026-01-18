import React, { useState } from 'react';
import { AdminLayout } from '../components/AdminLayout';
import {
  FileText,
  Clock,
  ChevronDown,
  ChevronUp,
  Phone,
  PhoneOff,
  XCircle,
  AlertCircle,
  ExternalLink,
  PhoneMissed
} from 'lucide-react';

interface CallLog {
  id: string;
  callStartTime: number;
  token: string;
  from: string;
  to: string;
  status: 'ANSWER' | 'BUSY' | 'CANCEL' | 'FAILED' | 'ERROR' | 'EXTERNAL' | 'NOANSWER';
  duration: number;
  metaData: any;
}

// Mock data based on the provided CDR sample
const mockCallLogs: CallLog[] = [
  {
    id: '1',
    callStartTime: 1716239100387,
    token: '3caa3541d5f8497e9c79ea30ef689677',
    from: 'cdrFromIdentString',
    to: 'cdrDestinationIdentString',
    status: 'ANSWER',
    duration: 33,
    metaData: {
      timestamp: 1716239100,
      domain: 'nullDomain',
      subscriber: null,
      cx_trunk_id: null,
      application: null,
      route: null,
      billsec: 31,
      disposition: 'CONNECTED',
      rated_cost: null,
      approx_cost: null,
      sell_cost: null,
      vapp_server: '172.24.xxx.xxx',
      call_id: '0b515a4c3c683a5c51048b2c3758719f@xxx.xxx.xxx.xxx:5060',
      session: {
        id: 9812750,
        domainId: 755,
        domain: null,
        destination: 'cdrDestinationIdentString',
        callerId: 'cdrFromIdentString',
        timeLimit: 0,
        callStartTime: 1716239100387,
        callEndTime: 1716239134343,
        callAnswerTime: 1716239102610,
        status: 'connected',
        vappServer: '172.24.xxx.xxx'
      }
    }
  },
  {
    id: '2',
    callStartTime: 1716238500000,
    token: 'a1b2c3d4e5f6789abcdef0123456789',
    from: '+1234567890',
    to: '+0987654321',
    status: 'BUSY',
    duration: 0,
    metaData: {
      timestamp: 1716238500,
      domain: 'company.example.com',
      subscriber: 'user123',
      disposition: 'BUSY',
      call_id: 'busy-call-123@example.com',
      session: {
        status: 'busy',
        vappServer: '172.24.xxx.xxx'
      }
    }
  },
  {
    id: '3',
    callStartTime: 1716237900000,
    token: 'f9e8d7c6b5a4987654321fedcba98765',
    from: '+1555123456',
    to: '+1555987654',
    status: 'NOANSWER',
    duration: 25,
    metaData: {
      timestamp: 1716237900,
      domain: 'voip.example.com',
      disposition: 'NOANSWER',
      call_id: 'noanswer-call-456@example.com',
      session: {
        status: 'noanswer',
        vappServer: '172.24.xxx.xxx'
      }
    }
  },
  {
    id: '4',
    callStartTime: 1716237300000,
    token: '1234567890abcdef1234567890abcdef',
    from: '+1444987654',
    to: '+1444123456',
    status: 'FAILED',
    duration: 5,
    metaData: {
      timestamp: 1716237300,
      domain: 'telecom.example.com',
      disposition: 'FAILED',
      call_id: 'failed-call-789@example.com',
      session: {
        status: 'error',
        vappServer: '172.24.xxx.xxx'
      }
    }
  },
  {
    id: '5',
    callStartTime: 1716236700000,
    token: 'abcdef1234567890abcdef1234567890',
    from: '+16665551234',
    to: '+16669876543',
    status: 'CANCEL',
    duration: 8,
    metaData: {
      timestamp: 1716236700,
      domain: 'callcenter.example.com',
      disposition: 'CANCEL',
      call_id: 'cancel-call-101@example.com',
      session: {
        status: 'cancel',
        vappServer: '172.24.xxx.xxx'
      }
    }
  }
];

export const CallLogs: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  // Filter logs based on selected status
  const filteredLogs = selectedStatus === 'ALL'
    ? mockCallLogs
    : mockCallLogs.filter(log => log.status === selectedStatus);

  // Format date/time from milliseconds
  const formatDateTime = (timestampMs: number): string => {
    const date = new Date(timestampMs);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Format duration
  const formatDuration = (seconds: number): string => {
    if (seconds === 0) return '0s';
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Get status color and icon
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'ANSWER':
        return { color: 'text-green-600 bg-green-100', icon: Phone, label: 'Answered' };
      case 'BUSY':
        return { color: 'text-orange-600 bg-orange-100', icon: PhoneOff, label: 'Busy' };
      case 'CANCEL':
        return { color: 'text-gray-600 bg-gray-100', icon: XCircle, label: 'Cancelled' };
      case 'FAILED':
        return { color: 'text-red-600 bg-red-100', icon: XCircle, label: 'Failed' };
      case 'ERROR':
        return { color: 'text-red-600 bg-red-100', icon: AlertCircle, label: 'Error' };
      case 'EXTERNAL':
        return { color: 'text-blue-600 bg-blue-100', icon: ExternalLink, label: 'External' };
      case 'NOANSWER':
        return { color: 'text-yellow-600 bg-yellow-100', icon: PhoneMissed, label: 'No Answer' };
      default:
        return { color: 'text-gray-600 bg-gray-100', icon: Phone, label: status };
    }
  };

  const toggleRowExpansion = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const statusOptions = ['ALL', 'ANSWER', 'BUSY', 'CANCEL', 'FAILED', 'ERROR', 'EXTERNAL', 'NOANSWER'];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Call Logs</h1>
            <p className="text-gray-600 mt-1">
              Historical call records and completed calls
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Filter by Status:</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>
                  {status === 'ALL' ? 'All Statuses' : getStatusInfo(status).label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Call Logs Table */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Call Records</h3>
            <p className="text-sm text-gray-600 mt-1">
              Completed calls with detailed information
            </p>
          </div>

          <div className="overflow-x-auto">
            {filteredLogs.length === 0 ? (
              <div className="p-8 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto" />
                <p className="text-gray-500 mt-2">No call records found</p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Call Start Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Call Token
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      From
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Meta Data
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredLogs.map((log) => {
                    const statusInfo = getStatusInfo(log.status);
                    const StatusIcon = statusInfo.icon;
                    const isExpanded = expandedRows.has(log.id);

                    return (
                      <React.Fragment key={log.id}>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatDateTime(log.callStartTime)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                            {log.token}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {log.from}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {log.to}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusInfo.color}`}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {statusInfo.label}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-gray-400 mr-1" />
                              {formatDuration(log.duration)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button
                              onClick={() => toggleRowExpansion(log.id)}
                              className="inline-flex items-center text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              {isExpanded ? (
                                <>
                                  <ChevronUp className="w-4 h-4 mr-1" />
                                  Hide
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4 mr-1" />
                                  Show
                                </>
                              )}
                            </button>
                          </td>
                        </tr>
                        {isExpanded && (
                          <tr className="bg-gray-50">
                            <td colSpan={7} className="px-6 py-4">
                              <div className="bg-white border border-gray-200 rounded-md p-4">
                                <h4 className="text-sm font-medium text-gray-900 mb-2">Call Details</h4>
                                <pre className="text-xs text-gray-600 bg-gray-50 p-3 rounded border overflow-x-auto">
                                  {JSON.stringify(log.metaData, null, 2)}
                                </pre>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};