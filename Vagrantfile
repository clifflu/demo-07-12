# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/6"

  # config.vm.box_check_update = false
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  config.vm.synced_folder ".", "/opt/live"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision "shell", inline: <<-SHELL
    rm -fr /opt/app
    cp -r /opt/live /opt/app
    curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
    yum install -y git gcc-c++ make nodejs
    cd /opt/app && npm install && npm run bootstrap
  SHELL
end
