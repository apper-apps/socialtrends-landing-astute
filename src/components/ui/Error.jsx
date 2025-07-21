import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <Card variant="glass" className="p-8 text-center max-w-md mx-auto">
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <ApperIcon name="AlertTriangle" className="w-8 h-8 text-red-400" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Oops! Trend Scan Failed</h3>
          <p className="text-gray-400">{message}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            Our AI scouts are having trouble accessing the trend database. This usually resolves quickly.
          </p>
          
          {onRetry && (
            <Button onClick={onRetry} variant="primary" className="w-full">
              <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
              Retry Trend Scan
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Error;