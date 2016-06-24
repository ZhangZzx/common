public function getMonthweeks($date)
    {
        $ret = array();
        $stimestamp = strtotime($date);
        //获取当月有几天
        $mdays = date('t', $stimestamp);
        //获取当月开始时间
        $msdate = date('Y-m-d', $stimestamp);
        //获取当月截止时间
        $medate = date('Y-m-' . $mdays, $stimestamp);
        //获取当月截止时间时间戳
        $etimestamp = strtotime($medate);
        //獲取第一周
        if (date('w', $stimestamp) == 0) {
            $zcsy = 0;
        } else {
            $zcsy = 7 - date('w', $stimestamp);//第一周去掉第一天還有幾天
        }
        $zcs1 = $msdate;
        $zce1 = date('Y-m-d', strtotime("+$zcsy day", $stimestamp));
        //$ret[1] = $zcs1 . '~' . $zce1;
        //获取本月有几周
        $last_day = $mdays - $zcsy - 1;
        $jzc = ceil($last_day / 7) + 1;

        date_default_timezone_set('PRC');

        for ($n = 0; $n < $jzc; $n++) {
            if ($n == 0) {
                $ret[$n] = $zcs1 . '~' . $zce1;
            } elseif ($n == $jzc - 1) {
                $zcsy = date('w', $etimestamp);//最后一周是周几 一~日 1~7
                if ($zcsy == 0) {
                    $zcs1 = date('Y-m-d', strtotime("-$zcsy day -6 day", $etimestamp));;
                } else {
                    $zcs1 = date('Y-m-d', strtotime("-$zcsy day +1 day", $etimestamp));
                }
                $ret[$jzc - 1] = $zcs1 . '~' . $medate;
            } else {
                if (date('w', $stimestamp) == 0) {
                    $zcsy = 0;
                } else {
                    $zcsy = 7 - date('w', $stimestamp);//第一周去掉第一天還有幾天
                }
                $num = ($n - 1) * 7 + 1;
                $b = strtotime("+$zcsy day +$num day", $stimestamp);
                $dsdate = date("Y-m-d", strtotime("0 day", $b));
                $dedate = date("Y-m-d", strtotime("6 day", $b));
                $ret[$n] = $dsdate . '~' . $dedate;
            }
        }
        return $ret;
    }
